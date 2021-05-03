import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2043Component } from './test-component2043.component';

describe('TestComponent2043Component', () => {
  let component: TestComponent2043Component;
  let fixture: ComponentFixture<TestComponent2043Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2043Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
