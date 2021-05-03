import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent267Component } from './test-component267.component';

describe('TestComponent267Component', () => {
  let component: TestComponent267Component;
  let fixture: ComponentFixture<TestComponent267Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent267Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
