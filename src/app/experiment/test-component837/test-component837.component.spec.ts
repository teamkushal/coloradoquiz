import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent837Component } from './test-component837.component';

describe('TestComponent837Component', () => {
  let component: TestComponent837Component;
  let fixture: ComponentFixture<TestComponent837Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent837Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
