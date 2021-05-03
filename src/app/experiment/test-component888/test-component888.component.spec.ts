import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent888Component } from './test-component888.component';

describe('TestComponent888Component', () => {
  let component: TestComponent888Component;
  let fixture: ComponentFixture<TestComponent888Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent888Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
