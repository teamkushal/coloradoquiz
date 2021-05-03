import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3427Component } from './test-component3427.component';

describe('TestComponent3427Component', () => {
  let component: TestComponent3427Component;
  let fixture: ComponentFixture<TestComponent3427Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3427Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
