import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2782Component } from './test-component2782.component';

describe('TestComponent2782Component', () => {
  let component: TestComponent2782Component;
  let fixture: ComponentFixture<TestComponent2782Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2782Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
