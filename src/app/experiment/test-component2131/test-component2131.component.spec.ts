import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2131Component } from './test-component2131.component';

describe('TestComponent2131Component', () => {
  let component: TestComponent2131Component;
  let fixture: ComponentFixture<TestComponent2131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
