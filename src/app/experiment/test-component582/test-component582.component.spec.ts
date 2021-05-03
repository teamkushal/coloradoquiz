import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent582Component } from './test-component582.component';

describe('TestComponent582Component', () => {
  let component: TestComponent582Component;
  let fixture: ComponentFixture<TestComponent582Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent582Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
