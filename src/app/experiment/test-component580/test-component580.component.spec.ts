import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent580Component } from './test-component580.component';

describe('TestComponent580Component', () => {
  let component: TestComponent580Component;
  let fixture: ComponentFixture<TestComponent580Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent580Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
