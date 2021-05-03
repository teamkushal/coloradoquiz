import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3223Component } from './test-component3223.component';

describe('TestComponent3223Component', () => {
  let component: TestComponent3223Component;
  let fixture: ComponentFixture<TestComponent3223Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3223Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
