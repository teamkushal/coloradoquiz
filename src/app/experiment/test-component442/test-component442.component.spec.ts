import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent442Component } from './test-component442.component';

describe('TestComponent442Component', () => {
  let component: TestComponent442Component;
  let fixture: ComponentFixture<TestComponent442Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent442Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
