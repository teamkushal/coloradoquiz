import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent639Component } from './test-component639.component';

describe('TestComponent639Component', () => {
  let component: TestComponent639Component;
  let fixture: ComponentFixture<TestComponent639Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent639Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
