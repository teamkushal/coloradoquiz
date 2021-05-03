import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2031Component } from './test-component2031.component';

describe('TestComponent2031Component', () => {
  let component: TestComponent2031Component;
  let fixture: ComponentFixture<TestComponent2031Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2031Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
