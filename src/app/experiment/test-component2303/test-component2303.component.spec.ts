import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2303Component } from './test-component2303.component';

describe('TestComponent2303Component', () => {
  let component: TestComponent2303Component;
  let fixture: ComponentFixture<TestComponent2303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2303Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
