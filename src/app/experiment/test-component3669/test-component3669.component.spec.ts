import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3669Component } from './test-component3669.component';

describe('TestComponent3669Component', () => {
  let component: TestComponent3669Component;
  let fixture: ComponentFixture<TestComponent3669Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3669Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
