import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3747Component } from './test-component3747.component';

describe('TestComponent3747Component', () => {
  let component: TestComponent3747Component;
  let fixture: ComponentFixture<TestComponent3747Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3747Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
