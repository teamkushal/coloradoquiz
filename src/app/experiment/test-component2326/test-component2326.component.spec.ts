import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2326Component } from './test-component2326.component';

describe('TestComponent2326Component', () => {
  let component: TestComponent2326Component;
  let fixture: ComponentFixture<TestComponent2326Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2326Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
