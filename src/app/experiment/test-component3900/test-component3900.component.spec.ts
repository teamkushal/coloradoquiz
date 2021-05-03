import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3900Component } from './test-component3900.component';

describe('TestComponent3900Component', () => {
  let component: TestComponent3900Component;
  let fixture: ComponentFixture<TestComponent3900Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3900Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
