import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3019Component } from './test-component3019.component';

describe('TestComponent3019Component', () => {
  let component: TestComponent3019Component;
  let fixture: ComponentFixture<TestComponent3019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
