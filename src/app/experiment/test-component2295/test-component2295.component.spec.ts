import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2295Component } from './test-component2295.component';

describe('TestComponent2295Component', () => {
  let component: TestComponent2295Component;
  let fixture: ComponentFixture<TestComponent2295Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2295Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
