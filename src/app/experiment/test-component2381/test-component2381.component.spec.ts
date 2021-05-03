import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2381Component } from './test-component2381.component';

describe('TestComponent2381Component', () => {
  let component: TestComponent2381Component;
  let fixture: ComponentFixture<TestComponent2381Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2381Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
