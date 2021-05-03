import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2351Component } from './test-component2351.component';

describe('TestComponent2351Component', () => {
  let component: TestComponent2351Component;
  let fixture: ComponentFixture<TestComponent2351Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2351Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
