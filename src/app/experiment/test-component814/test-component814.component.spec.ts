import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent814Component } from './test-component814.component';

describe('TestComponent814Component', () => {
  let component: TestComponent814Component;
  let fixture: ComponentFixture<TestComponent814Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent814Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
