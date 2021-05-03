import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3679Component } from './test-component3679.component';

describe('TestComponent3679Component', () => {
  let component: TestComponent3679Component;
  let fixture: ComponentFixture<TestComponent3679Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3679Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
