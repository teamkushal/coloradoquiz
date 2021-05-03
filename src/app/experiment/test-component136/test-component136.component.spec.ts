import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent136Component } from './test-component136.component';

describe('TestComponent136Component', () => {
  let component: TestComponent136Component;
  let fixture: ComponentFixture<TestComponent136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent136Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
