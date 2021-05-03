import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3370Component } from './test-component3370.component';

describe('TestComponent3370Component', () => {
  let component: TestComponent3370Component;
  let fixture: ComponentFixture<TestComponent3370Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3370Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
