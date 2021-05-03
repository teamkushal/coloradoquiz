import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent656Component } from './test-component656.component';

describe('TestComponent656Component', () => {
  let component: TestComponent656Component;
  let fixture: ComponentFixture<TestComponent656Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent656Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
