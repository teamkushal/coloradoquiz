import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1358Component } from './test-component1358.component';

describe('TestComponent1358Component', () => {
  let component: TestComponent1358Component;
  let fixture: ComponentFixture<TestComponent1358Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1358Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
