import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2820Component } from './test-component2820.component';

describe('TestComponent2820Component', () => {
  let component: TestComponent2820Component;
  let fixture: ComponentFixture<TestComponent2820Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2820Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
