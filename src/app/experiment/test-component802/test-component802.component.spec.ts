import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent802Component } from './test-component802.component';

describe('TestComponent802Component', () => {
  let component: TestComponent802Component;
  let fixture: ComponentFixture<TestComponent802Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent802Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
