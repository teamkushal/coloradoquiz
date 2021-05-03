import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent528Component } from './test-component528.component';

describe('TestComponent528Component', () => {
  let component: TestComponent528Component;
  let fixture: ComponentFixture<TestComponent528Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent528Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
