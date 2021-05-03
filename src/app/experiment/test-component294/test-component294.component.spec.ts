import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent294Component } from './test-component294.component';

describe('TestComponent294Component', () => {
  let component: TestComponent294Component;
  let fixture: ComponentFixture<TestComponent294Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent294Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
