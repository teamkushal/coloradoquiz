import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2748Component } from './test-component2748.component';

describe('TestComponent2748Component', () => {
  let component: TestComponent2748Component;
  let fixture: ComponentFixture<TestComponent2748Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2748Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
