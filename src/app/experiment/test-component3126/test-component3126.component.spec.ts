import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3126Component } from './test-component3126.component';

describe('TestComponent3126Component', () => {
  let component: TestComponent3126Component;
  let fixture: ComponentFixture<TestComponent3126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3126Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
