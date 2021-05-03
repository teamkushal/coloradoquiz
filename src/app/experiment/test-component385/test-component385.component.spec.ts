import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent385Component } from './test-component385.component';

describe('TestComponent385Component', () => {
  let component: TestComponent385Component;
  let fixture: ComponentFixture<TestComponent385Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent385Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
