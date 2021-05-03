import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1439Component } from './test-component1439.component';

describe('TestComponent1439Component', () => {
  let component: TestComponent1439Component;
  let fixture: ComponentFixture<TestComponent1439Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1439Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
