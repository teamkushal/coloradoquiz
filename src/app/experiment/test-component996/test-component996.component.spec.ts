import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent996Component } from './test-component996.component';

describe('TestComponent996Component', () => {
  let component: TestComponent996Component;
  let fixture: ComponentFixture<TestComponent996Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent996Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
