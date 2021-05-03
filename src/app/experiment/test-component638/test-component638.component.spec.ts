import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent638Component } from './test-component638.component';

describe('TestComponent638Component', () => {
  let component: TestComponent638Component;
  let fixture: ComponentFixture<TestComponent638Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent638Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
