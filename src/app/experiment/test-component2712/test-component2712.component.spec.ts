import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2712Component } from './test-component2712.component';

describe('TestComponent2712Component', () => {
  let component: TestComponent2712Component;
  let fixture: ComponentFixture<TestComponent2712Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2712Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
