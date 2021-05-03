import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1402Component } from './test-component1402.component';

describe('TestComponent1402Component', () => {
  let component: TestComponent1402Component;
  let fixture: ComponentFixture<TestComponent1402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1402Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
