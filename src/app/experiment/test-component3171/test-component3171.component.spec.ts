import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3171Component } from './test-component3171.component';

describe('TestComponent3171Component', () => {
  let component: TestComponent3171Component;
  let fixture: ComponentFixture<TestComponent3171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
