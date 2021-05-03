import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2965Component } from './test-component2965.component';

describe('TestComponent2965Component', () => {
  let component: TestComponent2965Component;
  let fixture: ComponentFixture<TestComponent2965Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2965Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
