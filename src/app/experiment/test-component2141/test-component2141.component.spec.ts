import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2141Component } from './test-component2141.component';

describe('TestComponent2141Component', () => {
  let component: TestComponent2141Component;
  let fixture: ComponentFixture<TestComponent2141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
