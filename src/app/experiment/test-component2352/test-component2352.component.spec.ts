import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2352Component } from './test-component2352.component';

describe('TestComponent2352Component', () => {
  let component: TestComponent2352Component;
  let fixture: ComponentFixture<TestComponent2352Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2352Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
