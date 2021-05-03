import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent590Component } from './test-component590.component';

describe('TestComponent590Component', () => {
  let component: TestComponent590Component;
  let fixture: ComponentFixture<TestComponent590Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent590Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
