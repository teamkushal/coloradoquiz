import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent175Component } from './test-component175.component';

describe('TestComponent175Component', () => {
  let component: TestComponent175Component;
  let fixture: ComponentFixture<TestComponent175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent175Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
