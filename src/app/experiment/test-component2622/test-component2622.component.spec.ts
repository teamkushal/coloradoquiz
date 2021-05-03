import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2622Component } from './test-component2622.component';

describe('TestComponent2622Component', () => {
  let component: TestComponent2622Component;
  let fixture: ComponentFixture<TestComponent2622Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2622Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
