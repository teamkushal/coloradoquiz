import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent217Component } from './test-component217.component';

describe('TestComponent217Component', () => {
  let component: TestComponent217Component;
  let fixture: ComponentFixture<TestComponent217Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent217Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
