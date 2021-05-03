import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent830Component } from './test-component830.component';

describe('TestComponent830Component', () => {
  let component: TestComponent830Component;
  let fixture: ComponentFixture<TestComponent830Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent830Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
