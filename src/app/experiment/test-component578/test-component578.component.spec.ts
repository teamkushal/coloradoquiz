import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent578Component } from './test-component578.component';

describe('TestComponent578Component', () => {
  let component: TestComponent578Component;
  let fixture: ComponentFixture<TestComponent578Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent578Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
