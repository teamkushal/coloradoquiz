import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent153Component } from './test-component153.component';

describe('TestComponent153Component', () => {
  let component: TestComponent153Component;
  let fixture: ComponentFixture<TestComponent153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent153Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
