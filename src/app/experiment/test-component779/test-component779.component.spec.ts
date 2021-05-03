import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent779Component } from './test-component779.component';

describe('TestComponent779Component', () => {
  let component: TestComponent779Component;
  let fixture: ComponentFixture<TestComponent779Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent779Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
