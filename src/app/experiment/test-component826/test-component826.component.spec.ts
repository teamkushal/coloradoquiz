import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent826Component } from './test-component826.component';

describe('TestComponent826Component', () => {
  let component: TestComponent826Component;
  let fixture: ComponentFixture<TestComponent826Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent826Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
