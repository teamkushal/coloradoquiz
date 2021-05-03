import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent816Component } from './test-component816.component';

describe('TestComponent816Component', () => {
  let component: TestComponent816Component;
  let fixture: ComponentFixture<TestComponent816Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent816Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
